"use client";
import { createContext, useState, useContext, useEffect, useMemo } from "react";
import { supabase } from "@/config/supabase";

const AuthContext = createContext({});

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(false);
  const onAuthStateChange = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUser(user);
      }
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    onAuthStateChange();
  }, []);

  const value = useMemo(() => {
    return {
      user,
      signOut: () => supabase.auth.signOut(),
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const { user, signOut }: any = useContext(AuthContext);
  return { user, signOut };
};
