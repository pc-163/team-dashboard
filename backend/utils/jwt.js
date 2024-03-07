import jwt from 'jsonwebtoken';
const jwtk = 'e-comm';

export const generateToken = (payload) => {
 //console.log('payload', payload);

 return jwt.sign(payload, jwtk, { expiresIn: '2h' });
}


export function verifyToken(req, res, next) {
    let token = req.headers['authorization'];
    if (token) {
        token = token.split(' ')[1];
        jwt.verify(token, jwtk, (err, decoded) => {
            if (err) {
                res.status(401).send({ result: "Add Token on Header" });
            } else {
                next();
            }

        })
    } else {
        res.status(403).send({ result: "Api Token not found" });
    }
}
