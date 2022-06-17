import express from 'express';

const router = express.Router();

const users =[
    {
        FirstName :"John",
        LsatName:"Free",
        age:"35"
        },
       {
        FirstName :"absar",
        LsatName:"lesh",
        age:"36"
       } 
]

router.get('/',(req,res) =>{
   console.log(users)
    res.send('Hello');
    
});

router.post('/', (req,res)=> {

});
export default router;