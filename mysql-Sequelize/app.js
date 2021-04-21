const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');
const Order = require('./models/order');
const OrderItem = require('./models/order-item');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { promises } = require('fs');
const { use } = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1).then(user => {
        req.user = user;
        next();
    }).catch(err => {
        console.log(err);
    });
})


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


// Associations

Product.belongsTo(User, { contraints: true, onDelete: 'CASCADE' });
User.hasMany(Product); // optional
User.hasOne(Cart);
Cart.belongsTo(User); // optional
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, { through: OrderItem });






// .sync({ force: true }) make all table gone when restart app

sequelize
    .sync()
    // .sync({ force: true })
    .then(() => {
        return User.findByPk(1);
    }).then(user => {
        if (!user) {
            User.create({ name: 'Pratik', email: 'Pratik@gmail.com' });
        }
        return user;
        // or return Promise.resolve(user); 
    }).then(user => {
        // console.log(user);
        user.createCart();
    }).then(cart => {
        app.listen(3000);
    }).catch(err => {
        console.log(err);
    })

