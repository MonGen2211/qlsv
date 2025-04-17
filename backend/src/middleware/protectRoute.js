export const protectRoute = async (req, res, next) => {
  try {
    const decoded = req.cookies.jwt;
    console.log(decoded);
  } catch (error) {
    console.log("Error protectRoute middleware: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
