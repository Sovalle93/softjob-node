import { getProfiles } from "../models/profileModel.js"
import { findError } from "../utils/utils.js"

const getAllProfiles = async (req, res) => {
  const user = req.user
  try {
    const profiles = await getProfiles();
    res.status(200).json({ profiles: profiles, user: user })
  } catch (error) {
    console.log(error)
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message })
  }
}

export { getAllProfiles }
