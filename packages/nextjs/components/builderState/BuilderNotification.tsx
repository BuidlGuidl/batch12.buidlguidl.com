import { notification } from "~~/utils/scaffold-eth";

type NotificationLink = {
  text: string;
  url: string;
};

type NotificationConfig = {
  message: string;
  link?: NotificationLink;
  type?: "info" | "success" | "warning";
};

export const showBuilderNotification = ({ message, link, type = "info" }: NotificationConfig) => {
  const content = (
    <div>
      {message}
      {link && (
        <>
          {" "}
          <a href={link.url} target="_blank" className="underline">
            {link.text}
          </a>
        </>
      )}
    </div>
  );

  notification[type](content);
};
