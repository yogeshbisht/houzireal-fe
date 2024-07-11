const apiErrorMessage = (error: any, customMessage: string) => ({
  description:
    "data" in error
      ? (error.data as { message: string }).message
      : customMessage,
  duration: 5000,
});

export { apiErrorMessage };
