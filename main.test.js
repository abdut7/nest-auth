const axiose=require('axios')

async function a(){
    const {data:{token}}=await axiose.post("http://localhost:3001/auth/login",
    {
	
       username:"username",
       password:"password"
    });
await console.log(token)
    const {data}=await axiose.get('http://localhost:3001/auth',
    {
        headers:{autherization: 'Bearer '+token}

    })
    console.log(data)
};

a()