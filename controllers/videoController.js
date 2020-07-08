import Video from "../models/Video";
import routes from "../routes";

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home" }, videos);
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload Video" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const getEditVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.send("delete Video"); // No

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
