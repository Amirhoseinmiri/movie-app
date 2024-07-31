import mongoose from "mongoose";

const showSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  gener: {
    type: String,
    required: true,
  },
  theariticalReleaseDate: {
    type: String,
    required: true,
  },
  ottReleaseDate: {
    type: String,
    required: true,
  },
  durationInMinutes: {
    type: Number,
    required: true,
  },
  castAndCrew: {
    type: Array,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  bannerImage: {
    type: String,
    required: true,
  },
  trailer: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: false,
  },
  episodes: {
    type: Array,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: false,
    default: true,
  },
});

if (mongoose.models && mongoose.models["shows"]) {
  delete mongoose.models["shows"];
}

const ShowModel = mongoose.model("shows", showSchema);
export default ShowModel;
