import express from 'express'
import extenso from 'extenso'

const app = express()


app.get('/', (require:any,response:any): void => {
  response.send("<h1>Insira um valor na URL</h1>")
})

app.get('/:id', (require:any, response:any) : void => {
  response.send(JSON.parse(`{ "extenso" : "${extenso(require.params.id , { negative: 'informal' })}" }`))
})

app.listen(7070)