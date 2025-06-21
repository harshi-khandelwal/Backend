import express from 'express'; 

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});
// get a list of 5 jokes

app.get('/jokes', (req,res) => {
    const jokes = [
        {
            id:1,
            title: 'a joke',
            content: 'this is a joke'
        },
        {
            id:2,
            title: 'another joke',
            content: 'this is another joke'
        },
        {
            id:3,
            title: 'a third joke',
            content: 'this is a third joke'
        },
        {
            id:4,
            title: 'a fourth joke',
            content: 'this is a fourth joke'
        },
        {
            id:5,
            title: 'a fifth joke',
            content: 'this is a fifth joke'
        }
    ]
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`serve at https://localhost:${port}`);
})