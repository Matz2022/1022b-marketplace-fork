console.log(" Olá Mundo")


//Live Server  é do Front-End


//
/*1 - Para construir um servidor back-end e responder 
Vamos utilizar o EXPRESS */
import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
//Criar o Objeto do tipo express 
const app = express ()

//incluir para ele receber json
app.use(express.json())//Middleware

/*incluir o CORS -> Quando a Gente tem outra porta fazendo */
app.use(cors())
//Rota de produtos

app.get("/produtos", async(req,res)=>{
    
   // ok PASSO 1: Criar um banco de dados 

   // PASSO 2: Usar a lib mysql2 para conectar o banco
   try{
    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "banco1022b",
        port: 3306
    })
     // PASSO 3: QUERY -> SELECT * FROM produtos 
   const [result,filds] = await conexao.query("SELECT * from produtos")
   

    res.send(result)
}catch(e){
    res.status(500).send("Erro do servidor")
}
  

   // PASSO 4: Colocar os dados do banco no response

    
   
})
//INICIAR o Servidor 
app.listen(8000,()=>{
    console.log("SERVIDOR INICIADO NA PORTA 8000")
})