export const home = (req, res) => res.render("home");

export const search = (req, res) => res.render("search");

export const videos = (req, res) => res.send("videos"); // No

export const upload = (req, res) => res.render("upload");

export const editVideo = (req, res) => res.render("editVideo");

export const deleteVideo = (req, res) => res.send("delete Video"); // No

export const videoDetail = (req, res) => res.render("videoDetail");
