// 1 Разработать Sequelize-модели базы данных по предметной области. В качестве предметной области предлагается взять БД “Социальная сеть” из предыдущих уроков (или ее отдельная часть), либо придумать что-то свое

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("social_network", 'root', "", {
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
        sity: {
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
            allowNull: true,
            defaultValue: 0,
        },
    },
    {
        tableName: "users",
        timestamps: false
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
    },
    {
        tableName: "posts",
        timestamps: false
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
    },
    {
        tableName: "comments",
        timestamps: false
    }
);

; (async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();

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
//     b) получения элемента по идентификатору (findByPk)
//     c) получения списка элементов с условием (findAll с where)
//     d) добавления элемента
//     e) удаления элемента
//     f) редактирования элемен

; (async () => {
    try {
        await User.sync({
            alter: true,
            force: false
        });

        
    } catch (error) {
        console.error(error);
    }
})();