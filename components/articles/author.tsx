import blogConfig from "@/blog.config";
import Image from "next/image";

export const ArticleAuthor: React.FC<{ writtenBy: string }> = ({
  writtenBy,
}) => {
  const writer = blogConfig.writers.find((w) => w.id === writtenBy);
  if (!writer) {
    return null;
  }

  return (
    <div className="article-author">
      <div className="article-author-image-wrap">
        <Image
          src={writer.image}
          width="110px"
          height="110px"
          className="article-author-image"
        />
      </div>
      <div className="article-author-inner">
        <p className="article-author-subtitle">Author</p>
        <p className="article-author-title">{writer.name}</p>
        <p className="article-author-description">{writer.description}</p>
      </div>
      <style jsx>
        {`
          .article-author {
            background-color: var(--c-gray);
            padding: 30px 40px;
            margin-bottom: 40px;
            border-radius: 20px;
            display: flex;
            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              display: block;
              padding: 30px;
            }
          }
          .article-author-image-wrap {
            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              transform: translateY(-65px);
              margin-bottom: -65px;
              display: flex;
              justify-content: center;
            }
          }
          .article-author-inner {
            margin-left: 20px;
            @media screen and (max-width: ${blogConfig.styles.breakPoints
                .medium}) {
              margin-left: 0;
            }
          }
          .article-author-subtitle {
            font-size: var(--text-sm);
            color: var(--c-text-gray-lighter);
            font-weight: bold;
            margin-bottom: 10px;
          }
          .article-author-title {
            font-size: var(--text-lg);
            font-weight: bold;
            margin-top: 0;
            margin-bottom: 20px;
          }
          .article-author-description {
            font-size: var(--text-md);
          }
        `}
      </style>
    </div>
  );
};
