const mysql = require("mysql2");
import { withIronSession } from "next-iron-session";

export async function handler(req, res) {
  try {
    let user = req.session.get().user;
    if (typeof user == "undefined") {
      return res.status(500).json({ success: false, error: "Not signed in" });
    }
    if (req.method == "GET") {
      const connection = mysql.createConnection(process.env.DATABASE_URL);
      var [results, fields, err] = await connection
        .promise()
        .query(
          `select list_requests.*, Users.username from list_requests join Users on list_requests.creator=Users.id;`
        );
      res.status(200).json(results);
    }
    if (req.method == "POST") {
      const {
        topic, description
      } = req.body;

      const connection = mysql.createConnection(process.env.DATABASE_URL);
      let [result, err, returnFields] = await connection.promise().execute(`
                INSERT INTO list_requests (
                    topic, description, creator
                ) VALUES (
                    '${topic}', '${description}', '${user.id}'
                );`);

      connection.end();
      res.status(200).json({ success: true });
    }
    if (req.method == "PATCH") {
      //Implement
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ success: false, error: e });
  }
}

export default withIronSession(handler, {
  password: process.env.APPLICATION_SECRET,
  cookieName: "Connective",
  // if your localhost is served on http:// then disable the secure flag
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
});