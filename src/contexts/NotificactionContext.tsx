import React, { createContext, useState, useContext, ReactNode } from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";


type NotificationType = AlertColor;


interface NotificationContextProps {
    showNotification: (message: string, type: NotificationType) => void;
}


const NotificationContext = createContext<NotificationContextProps | null>(null);


export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [snackbar, setSnackbar] = useState({ open: false, message: "", type: "success" as NotificationType });

    const showNotification = (message: string, type: NotificationType) => {
        setSnackbar({ open: true, message, type });
    };

    const closeSnackbar = () => {
        setSnackbar({ open: false, message: "", type: "success" });
    };

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={4000}
                onClose={closeSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}

            >
                <Alert
                    onClose={closeSnackbar}
                    severity={snackbar.type}
                    sx={{
                        width: "100%",
                        fontWeight: "bold",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                        borderRadius: "8px",
                    }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </NotificationContext.Provider>
    );
};

//hook
export const useNotification = (): NotificationContextProps => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotification debe usarse dentro de un NotificationProvider");
    }
    return context;
};