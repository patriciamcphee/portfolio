export function BlogCardPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="blog-dots"
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1.5" fill="white" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#blog-dots)" />
    </svg>
  )
}
