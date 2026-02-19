/**
 * BlogCardSkeleton — shimmer placeholder shown while blog data loads.
 */
function SkeletonLine({ className = '' }) {
  return <div className={`skeleton rounded-lg ${className}`} />
}

export default function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
      {/* Image placeholder */}
      <SkeletonLine className="h-48 rounded-none" />

      <div className="p-5 space-y-3">
        {/* Category badge */}
        <SkeletonLine className="h-5 w-20 rounded-full" />
        {/* Title */}
        <SkeletonLine className="h-5 w-full" />
        <SkeletonLine className="h-4 w-4/5" />
        {/* Author */}
        <div className="flex items-center gap-3 pt-2">
          <SkeletonLine className="h-8 w-8 rounded-full flex-shrink-0" />
          <div className="flex-1 space-y-1.5">
            <SkeletonLine className="h-3 w-28" />
            <SkeletonLine className="h-3 w-20" />
          </div>
        </div>
      </div>
    </div>
  )
}
