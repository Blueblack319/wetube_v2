import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

const handleVideos = (req, res) => res.send("Videos");

const handleUpload = (req, res) => res.send("Upload");

const handleEditVideo = (req, res) => res.send("Edit Video");

const handleDeleteVideo = (req, res) => res.send("Delete Video");

const handleVideoDetail = (req, res) => res.send("Video Detail");

videoRouter.get(routes.home, handleVideos);
videoRouter.get(routes.upload, handleUpload);
videoRouter.get(routes.editVideo, handleEditVideo);
videoRouter.get(routes.deleteVideo, handleDeleteVideo);
videoRouter.get(routes.videoDetail, handleVideoDetail);

export default videoRouter;
