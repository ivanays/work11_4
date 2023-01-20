// 1 Разработать Sequelize-модели базы данных по предметной области. В качестве предметной области предлагается взять БД “Социальная сеть” из предыдущих уроков (или ее отдельная часть), либо придумать что-то свое

const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize("social_network", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

// 2 Разработать 2-3 модели с использованием Sequelize, прописать атрибуты и их типы данных. Инициализировать модели, настроить синхронизацию с БД

const User = sequelize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        photo_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: null,
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null,
        },
        gender: {
            type: DataTypes.ENUM(["male", "female"]),
            allowNull: true,
            defaultValue: null,
        },
        balance: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "users",
        timestamps: false,
    }
);
const Post = sequelize.define(
    "Post",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "posts",
        timestamps: false,
    }
);
const Comment = sequelize.define(
    "Comment",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: null,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        tableName: "comments",
        timestamps: false,
    }
);

// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log("Connection has been established successfully.");
//     } catch (error) {
//         console.error("Unable to connect to the database:", error);
//     }
// })();

// ; (async () => {
//     try {
//         await User.sync({
//             alter: true,
//             force: false
//         });
//     } catch (error) {
//         console.error(error);
//     }
// })();
// ; (async () => {
//     try {
//         await Post.sync({
//             alter: true,
//             force: false
//         });
//     } catch (error) {
//         console.error(error);
//     }
// })();
// ; (async () => {
//     try {
//         await Comment.sync({
//             alter: true,
//             force: false
//         });
//     } catch (error) {
//         console.error(error);
//     }
// })();

// 3 Разработать функции для

//     a) получения списка из таблицы(findAll)
; (async () => {
    try {
        await User.sync({
            alter: true,
            force: false
        });
        const users = await User.findAll();
           if (users === null) {
            console.log("Not found!");
        } else {
            console.log(users instanceof User);
            console.log(users);
        }
    } catch (error) {
        console.error(error);
    }
})();

//     b) получения элемента по идентификатору (findByPk)
// ; (async () => {
//     try {
//         await User.sync({
//             alter: true,
//             force: false
//         });
//         const users = await User.findByPk(1);
//         if (users === null) {
//             console.log("Not found!");
//         } else {
//             console.log(users instanceof User);
//             console.log(users);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// })();

//     c) получения списка элементов с условием (findAll с where)
// ;(async () => {
//     try {
//         await User.sync({
//             alter: true,
//             force: false,
//         });
//         const users = await User.findAll({
//             where: {
//                 email: "peter@yandex.ru",
//             },
//         });
//                 if (users === null) {
//                     console.log("Not found!");
//                 } else {
//                     console.log(users instanceof User);
//                     console.log(users);
//                 }
//     } catch (error) {
//         console.error(error);
//     }
// })();

//     d) добавления элемента
// ; (async () => {
//     try {
//         await User.sync({
//             alter: true,
//             force: false,
//         });
//         const users = await User.create({
//             first_name: 'Alex',
//             last_name: 'More',
//             email: 'alex@mail.com',
//             password: '1234567'
//         });
//         if (users === null) {
//             console.log("Not found!");
//         } else {
//             console.log(users instanceof User);
//             console.log(users);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// })();

//     e) удаления элемента
// ; (async () => {
//     try {
//         await Post.sync({
//             alter: true,
//             force: false,
//         });
//         const posts = await Post.destroy({
//             where: {
//                 title: {
//                     [Op.like]: '%ell%'
//                 }
//             }
//         });
//     } catch (error) {
//         console.error(error);
//     }
// })();

//     f) редактирования элемен
// ; (async () => {
//     try {
//         await Post.sync({
//             alter: true,
//             force: false,
//         });
//         await Post.update(
//             { body: "Moscow is capital of Russian Federation" },
//             {
//                 where: {
//                     [Op.and]: [
//                         {
//                             title: "Столица",
//                         },
//                         {
//                             author_id: 1,
//                         },
//                     ],
//                 },
//             }
//         );
//     } catch (error) {
//         console.error(error);
//     }
// })();

// 4 (усложненное) Установить связи между моделями. Для этого можно воспользоваться документацией Sequelize (методы hasOne, hasMany, belongsTo, belongsToMany)