export const formatDate = (date: string | undefined) => {
    if (!date) return new Date().toLocaleDateString();

    try {
      return new Date(date).toLocaleDateString();
    } catch {
      return date;
    }
  };