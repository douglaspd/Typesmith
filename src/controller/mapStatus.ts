export default function mapStatus(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CREATED: 201,
    SUCCESS: 200,
  };
  
  return statusHTTPMap[status] ?? 500;
}