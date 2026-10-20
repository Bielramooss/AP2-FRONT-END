
function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-red-500 border-t-transparent"></div>

      <p className="mt-4 text-sm text-gray-400">
        Investigando arquivos...
      </p>
    </div>
  )
}

export default LoadingSpinner
