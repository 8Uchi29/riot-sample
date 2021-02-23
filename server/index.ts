import express from "express";

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

router.get(
    "/",
	async(req: express.Request, res: express.Response): Promise<void> => {
		res.send("hello world");
	}
);

app.use("/", router);
app.listen(3000, ()=>{
	console.log("listen on port 3000");
});

export default app;