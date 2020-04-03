const Query = {
  dogs(parent, args, ctx, info) {
    return [{ name: "Snickers" }, { name: "Cookie" }];
  }
};

module.exports = Query;
