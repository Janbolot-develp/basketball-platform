import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
}

interface CommentSectionProps {
  entityId: string;
  entityType: "player" | "team" | "feature";
  comments: Comment[];
}

export default function CommentSection({
  entityId,
  entityType,
  comments: initialComments,
}: CommentSectionProps) {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const comment = {
      id: Date.now().toString(),
      author: "Current User",
      content: newComment,
      date: new Date().toISOString(),
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  // Используем entityId и entityType (если нужно)
  console.log(entityId, entityType);

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-4">{t("comments.title")}</h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          placeholder={t("comments.placeholder")}
          rows={3}
        />
        <button
          type="submit"
          className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {t("comments.submit")}
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold">{comment.author}</span>
              <span className="text-sm text-gray-500">
                {new Date(comment.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
