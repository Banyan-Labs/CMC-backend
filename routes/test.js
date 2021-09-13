
module.exports = {

   test: (app) => {
        app.get("/api/test", (req, res) => {
            res.json({ message: "test success" });
        });
        
    }
};