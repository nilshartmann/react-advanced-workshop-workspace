import React, { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

import styles from "./LoadingIndicator.module.css";

type LikesWidgetProps = {
  initialLikes: number;
};

// todo:
//  1. handle Like Click mit Transition
//  2. ErrorBoundary
//  3. optimistic likes

export default function LikesWidget({ initialLikes }: LikesWidgetProps) {
  const [likes, setLikes] = useState(initialLikes);

  const handleLikeClick = async () => {
    // todo
  };

  return (
    <LikeButton onClick={handleLikeClick}>
      <span>{likes}</span>
      <HeartIcon />
    </LikeButton>
  );
}

type LikeButtonProps = {
  disabled?: boolean;
  children: ReactNode;
  onClick(): void;
};

function LikeButton({ disabled, children, onClick }: LikeButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "me-2 flex space-x-2 rounded border border-orange_2 bg-white p-2 text-[15px] text-orange_2 hover:cursor-pointer hover:bg-orange_2 hover:text-white disabled:cursor-default disabled:border-gray-900 disabled:bg-gray-300 disabled:text-gray-900 disabled:hover:text-gray-900",
      )}
    >
      {children}
    </button>
  );
}

function HeartIcon() {
  return (
    <span>
      <i className="fa-regular fa-heart mr-2"></i>
    </span>
  );
}

function LikeIndicator() {
  const bounceClass = `${styles.bounce}`;
  const placeholder = <i className="fa-regular fa-heart mr-2"></i>;

  return (
    <span className={`${styles.Spinner} ${styles.secondary}`}>
      {/*<div className={`${bounceClass} ${styles.bounce1}`}>{placeholder}</div>*/}
      <span className={`${bounceClass} ${styles.bounce2}`}>{placeholder}</span>
      {/*<div className={`${bounceClass} ${styles.bounce3}`}>{placeholder}</div>*/}
    </span>
  );
}
