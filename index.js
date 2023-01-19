const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("social_network", 'root', "", {
    host: "localhost",
    dialect: "mysql",
});

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
