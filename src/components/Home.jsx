import React, { useState } from "react";

export default function Home() {
  const [user, setUser] = useState(true);
  return (
    <div className="home">
      {user && (
        <>
          <h3>Welcome User</h3>
          <input type="file" />
        </>
      )}
    </div>
  );
}
