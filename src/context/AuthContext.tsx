import {
  RefObject,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setNotify } from "@/redux";
import { User } from "@/types/userType";
// import auth from "@/utils/firebase/firebaseConfig";

type MyContextType = {
  firebaseUser: Partial<User> | null;
  setFirebaseUser: React.Dispatch<React.SetStateAction<Partial<User> | null>>;
  sendToastNotification: (type: string, message?: string) => void;
  scrollRef: RefObject<HTMLDivElement> | null;
};

const defaultContext: MyContextType = {
  firebaseUser: null,
  setFirebaseUser: () => {},
  sendToastNotification: (type: string, message?: string) => {},
  scrollRef: null,
};

const Context = createContext<MyContextType>(defaultContext);

function AuthContext({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  const [firebaseUser, setFirebaseUser] = useState<Partial<User> | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // get firebase user on load/refresh
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
  //     if (currentuser) {
  //       setFirebaseUser({
  //         userId: currentuser.uid,
  //         email: currentuser?.email ?? "",
  //       });
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  const sendToastNotification = (type: string, message?: string) => {
    dispatch(
      setNotify({
        type,
        message,
      })
    );
  };

  return (
    <Context.Provider
      value={{
        firebaseUser,
        setFirebaseUser,
        sendToastNotification,
        scrollRef,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default AuthContext;

export const useAuthContext = () => useContext(Context);
