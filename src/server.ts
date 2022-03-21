// const express = require('express')
import express from "express"
import { add } from "."
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

function isValidNumber(input:string):boolean {
    if (input !== '' &&  !isNaN(input as unknown as number)){
        return true

    }
    return false
}

app.get('/suma', function(req,res){
    // console.log('num2: ' + req.query.num2)
    if (isValidNumber(req.query.num1 as string) && 
        isValidNumber(req.query.num2 as string)){
        
        var num1 = Number(req.query.num1)
        var num2 = Number(req.query.num2)

        var suma = add(num1,num2)
        res.send('estamos sumando: ' + suma)
       
    }else{
        res.send('envíame los datos correctamente.')
    }
})

app.listen(3000)