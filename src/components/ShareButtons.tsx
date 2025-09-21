"use client";

import { useState, useEffect } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";

// 1. Hapus import dari lucide-react dan ganti dengan react-icons
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type ShareButtonsProps = {
  title: string;
};

export default function ShareButtons({ title }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  if (!currentUrl) {
    return null;
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-text-secondary">Share:</span>

      {/* 2. Ganti komponen ikonnya */}
      <TwitterShareButton url={currentUrl} title={title}>
        <FaXTwitter size={25} />
      </TwitterShareButton>

      <FacebookShareButton url={currentUrl} hashtag="#CryptoExist">
        <FaFacebook size={25} />
      </FacebookShareButton>

      <LinkedinShareButton url={currentUrl} title={title}>
        <FaLinkedin size={25} />
      </LinkedinShareButton>
      <WhatsappShareButton url={currentUrl} title={title}>
        <FaWhatsapp size={25} />
      </WhatsappShareButton>
    </div>
  );
}
