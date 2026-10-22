export interface MotionRuntime {
  gsap: typeof import('gsap').gsap;
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;
  lenis: InstanceType<typeof import('lenis').default>;
}

let runtime: MotionRuntime | null = null;
const listeners = new Set<(value: MotionRuntime | null) => void>();

export function getMotionRuntime() {
  return runtime;
}

export function subscribeMotion(listener: (value: MotionRuntime | null) => void) {
  listeners.add(listener);
  if (runtime) listener(runtime);
  return () => listeners.delete(listener);
}

export function setMotionRuntime(value: MotionRuntime | null) {
  runtime = value;
  listeners.forEach((listener) => listener(value));
}
