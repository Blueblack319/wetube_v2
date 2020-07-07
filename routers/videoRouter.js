import express from "express";
import routes from "../routes";
import {
  handleVideos,
  handleUpload,
  handleEditVideo,
  handleDeleteVideo,
  handleVideoDetail,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.home, handleVideos);
videoRouter.get(routes.upload, handleUpload);
videoRouter.get(routes.editVideo, handleEditVideo);
videoRouter.get(routes.deleteVideo, handleDeleteVideo);
videoRouter.get(routes.videoDetail, handleVideoDetail);

export default videoRouter;
