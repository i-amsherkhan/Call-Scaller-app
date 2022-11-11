import React, { createContext, useState } from "react";
const AuthContext = createContext();
const UpdateAuthContext = createContext();

export function AuthProvider(props) {
  const [isSinged, setIsSinged] = useState(false);

  function handleSinged() {
    setIsSinged((prevSinged) => true);
  }

  return (
    <AuthContext.Provider value={isSinged}>
      <UpdateAuthContext.Provider value={handleSinged}>
        {props.childern}
      </UpdateAuthContext.Provider>
    </AuthContext.Provider>
  );
}

export { AuthContext, UpdateAuthContext };
