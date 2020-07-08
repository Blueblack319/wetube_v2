import express from "express";
import routes from "../routes";
import {
  upload,
  editVideo,
  videoDetail,
  videos,
  deleteVideo,
  getUpload,
  getEditVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.home, videos);

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, getUpload);

videoRouter.get(routes.editVideo, getEditVideo);
// videoRouter.post(routes.editProfile)

videoRouter.get(routes.deleteVideo, deleteVideo);
videoRouter.get(routes.videoDetail, videoDetail);

export default videoRouter;
