const userService = require('../services/user.service');

const create = async (req, res) => {

    const { name, username, email, password} = req.body;

    if(!name || !username || !email || !password){

        res.status(400).send({ message: 'Preencha todos os campos' });
        return;
    }

    const user = await userService.create( req.body );

    if(!user){
        return res.status(400).send({ message: "Erro ao criar usuario" });
        
    }

    res.status(201).send({
        message: 'Usuário criado com sucesso',
        user: {
            id: user._id,
            name,
            username,
            email,
        },
    })
};

module.exports = {create};