class Service {
  constructor(DBModel) {
    this.DBModel = DBModel;
  };

  // create = async (newModel, uniqueId) => {
  //   console.log('aqui')
  //   try {
  //     const [model, didExist] = await this.DBModel.findOrCreate({
  //       where: { uniqueId: newModel["uniqueId"] },
  //     });
  
  //     const message = didExist
  //       ? `Epreuve with same name already exist.`
  //       : `Epreuve create successfully ${model}`;
  
  //     return message;
  //   } catch (error) {
  //     console.log("a" + error)
  //   }

    
  // };

  getAll = async () => {
    const { count, models } = this.DBModel.findAndCountAll();

    const message =
      count === null
        ? `No epreuve found.`
        : `${count} epreuves found : ${models}`;

    return message;
  };

  getById = async (id) => {
    const model = await this.DBModel.findByPk(id);

    const message =
      model === null
        ? `No Epreuve with id ${id} found.`
        : `Epreuve with id = ${id} : ${model}`;

    return message;
  };

  update = async (model) => {
    const updateStatus = await this.DBModel.update(model, {
      where: { id: model.id },
    });

    return updateStatus;
  };

  delete = async (id) => {
    const model = await this.DBModel.findByPk(id);
    const deleteStatus = await model.destroy({ where: { id } });

    const message = deleteStatus
      ? `User : ${model} deleted with success.`
      : `No user with id = ${id} found.`;

    return message;
  };
}

module.exports = Service;
