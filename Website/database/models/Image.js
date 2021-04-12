module.exports = (sequelize, dataType)=> {
    const Image = sequelize.define("Image", 
        {
            id:{
                primaryKey: true,
                autoIncrement: true,
                type: dataType.INTEGER
            },
            image_path:{
                allowNull: false,
                type: dataType.STRING
            },
        }, { 
            timestamps: false
        })

        return Image;
        
        }
            