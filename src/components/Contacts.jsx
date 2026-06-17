import React, { useState } from "react";
import "../scss/Contacts.scss";
import github from "../assets/github.svg";
import insta from "../assets/insta.svg";
import telegram from "../assets/telegram.svg";
import email from "../assets/email.svg";
import location from "../assets/location.svg";
import { useTranslation } from "react-i18next";

const contactLinks = [
  {
    id: 1,
    text: "gmail.com",
    link: "mailto:ilyalukyanov34@gmail.com",
    icon: email,
  },
  {
    id: 2,
    text: "Tashkent, Uzbekistan",
    link: "https://maps.google.com/?q=Tashkent,Uzbekistan",
    icon: location,
  },
];

const socialLinks = [
  {
    id: 1,
    name: "github.com",
    link: "https://github.com/ilyalukyanov34-al",
    icon: github,
  },
  {
    id: 2,
    name: "Telegram",
    link: "https://t.me/developer_Lukyanov",
    icon: telegram,
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://www.instagram.com/developer__lukyanov",
    icon: insta,
  },
];

const Contacts = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация
    if (name.trim().length < 2) {
      setStatus("errorName");
      return;
    }

    if (!/^@\w+$/.test(email)) {
      setStatus("errorTelegram");
      return;
    }

    if (message.trim().length < 10) {
      setStatus("errorMessage");
      return;
    }

    setStatus("sending");

    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_CHAT_ID;

    const text = `
  📩 Новое сообщение с портфолио!
  👤 Имя: ${name}
  ✈️ Telegram: ${email}
  💬 Сообщение: ${message}
      `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text }),
        },
      );

      if (res.ok) {
        setStatus("success");
        setTimeout(() => setStatus(""), 3000);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <div className="contact__title">
            <div className="contact__title-circle"></div>
            <h2 className="contact__title-text">{t("contacts")}</h2>
          </div>
        </div>

        <div className="contact__row">
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__input-group">
              <input
                type="text"
                placeholder={t("your_name")}
                className="contact__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {status === "errorName" && (
                <p className="contact__status contact__status--error">
                  {t("error_name")}
                </p>
              )}
            </div>

            <div className="contact__input-group">
              <input
                type="text"
                placeholder={t("your_telegram")}
                className="contact__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {status === "errorTelegram" && (
                <p className="contact__status contact__status--error">
                  {t("error_telegram")}
                </p>
              )}
            </div>

            <div className="contact__input-group">
              <textarea
                placeholder={t("message")}
                className="contact__textarea"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {status === "errorMessage" && (
                <p className="contact__status contact__status--error">
                  {t("error_message")}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="contact__btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? t("sending") : t("send_message")}
              <span className="contact__btn-arrow"> →</span>
            </button>

            {status === "success" && (
              <p className="contact__status contact__status--success">
                {t("success")}
              </p>
            )}
            {status === "error" && (
              <p className="contact__status contact__status--error">
                {t("error")}
              </p>
            )}
          </form>

          <div className="contact__card">
            <div className="contact__main-list">
              {contactLinks.map((item) => (
                <a
                  href={item.link}
                  key={item.id}
                  className="contact__item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__icon">
                    <img
                      src={item.icon}
                      alt={item.text}
                      width={24}
                      height={24}
                    />
                  </span>
                  <span className="contact__text">{item.text}</span>
                </a>
              ))}
            </div>

            <h3 className="contact__subtitle">{t("social")}</h3>

            <div className="contact__social-list">
              {socialLinks.map((social) => (
                <a
                  href={social.link}
                  key={social.id}
                  className="contact__item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="contact__icon">
                    <img
                      src={social.icon}
                      alt={social.name}
                      width={24}
                      height={24}
                    />
                  </span>
                  <span className="contact__text">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
