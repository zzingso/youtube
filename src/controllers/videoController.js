const videos = [
  {
    title : "Hello",
    rating : 5,
    comments : 2,
    createdAt : "2 minutes age",
    views : 59,
    id : 1,
  },
  {
    title : "Hello2",
    rating : 5,
    comments : 2,
    createdAt : "2 minutes age",
    views : 59,
    id : 2,
  },
  {
    title : "Hello3",
    rating : 5,
    comments : 2,
    createdAt : "2 minutes age",
    views : 59,
    id : 3,
  }
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle : "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id-1];
  return res.render("watch", { pageTitle : `Watching: ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id-1];
  return res.render("edit", { pageTitle : `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");