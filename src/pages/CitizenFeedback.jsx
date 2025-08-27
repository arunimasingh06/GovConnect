import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

const CitizenFeedback = () => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [feedbackType, setFeedbackType] = useState('suggestion'); // suggestion, complaint, praise
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitSuccess(false);
    setIsSubmitting(true);

    if (rating === 0) {
      setError(t('selectStarRating'));
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      try {
        // Here you would send the feedback to your backend API
        console.log({
          rating,
          comment,
          feedbackType,
        });
        setSubmitSuccess(true);
        setRating(0);
        setComment('');
        setFeedbackType('suggestion');
      } catch (err) {
        setError(t('feedbackSubmitError') + err.message);
      } finally {
        setIsSubmitting(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-text mb-6">{t('citizenFeedback')}</h1>

        <div className="bg-card rounded-xl shadow-light border border-border p-6 max-w-2xl mx-auto">
          <form onSubmit={handleSubmitFeedback} className="space-y-6">
            {error && (
              <div className="bg-danger/10 border border-danger/30 text-danger px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">{t('error')}!</strong>
                <span className="block sm:inline"> {error}</span>
              </div>
            )}

            {submitSuccess && (
              <div className="bg-success/10 border border-success/30 text-success px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">{t('success')}!</strong>
                <span className="block sm:inline"> {t('feedbackSubmitted')}</span>
              </div>
            )}

            {/* Star Rating */}
            <div>
              <label className="block text-lg font-medium text-text mb-3">{t('starRating')}</label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`cursor-pointer ${star <= rating ? 'text-accent fill-current' : 'text-lightText'}`}
                    size={32}
                    onClick={() => handleStarClick(star)}
                  />
                ))}
              </div>
            </div>

            {/* Comment Box */}
            <div>
              <label htmlFor="comment" className="block text-lg font-medium text-text mb-3">{t('yourComment')}</label>
              <textarea
                id="comment"
                rows="4"
                className="w-full p-3 border border-border rounded-lg focus:ring-primary focus:border-primary bg-card text-text placeholder-lightText shadow-light"
                placeholder={t('shareYourFeedback')}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>

            {/* Feedback Type Tags */}
            <div>
              <label className="block text-lg font-medium text-text mb-3">{t('feedbackType')}</label>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setFeedbackType('suggestion')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${feedbackType === 'suggestion' ? 'bg-primary text-white shadow-medium' : 'bg-background text-lightText hover:bg-gray-100 shadow-light'}`}
                >
                  {t('suggestion')}
                </button>
                <button
                  type="button"
                  onClick={() => setFeedbackType('complaint')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${feedbackType === 'complaint' ? 'bg-danger text-white shadow-medium' : 'bg-background text-lightText hover:bg-gray-100 shadow-light'}`}
                >
                  {t('complaint')}
                </button>
                <button
                  type="button"
                  onClick={() => setFeedbackType('praise')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${feedbackType === 'praise' ? 'bg-secondary text-white shadow-medium' : 'bg-background text-lightText hover:bg-gray-100 shadow-light'}`}
                >
                  {t('praise')}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-medium transform hover:scale-105"
            >
              {isSubmitting ? t('submittingFeedback') : t('submitFeedback')}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CitizenFeedback;
