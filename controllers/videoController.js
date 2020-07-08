export const home = (req, res) => res.render("home", { pageTitle: "Home" });

export const search = (req, res) =>
  res.render("search", { pageTitle: "Search" });

export const videos = (req, res) => res.send("videos"); // No

export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload Video" });
export const postUpload = (req, res) => {
  const {
    body: { videoFile, title, description },
  } = req;
  res.redirect(routes.home);
};

export const getEditVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) => res.send("delete Video"); // No

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });
