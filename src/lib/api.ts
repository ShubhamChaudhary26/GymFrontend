// lib/api.ts
class ApiService {
    private baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api/v1";

    async request(endpoint: string, options: RequestInit = {}) {
        const url = `${this.baseURL}${endpoint}`;

        const config: RequestInit = {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            ...options,
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Request failed");
            }

            return data;
        } catch (error: any) {
            throw new Error(error.message || "Network error");
        }
    }

    // Auth endpoints
    async register(formData: FormData) {
        return this.request("/users/register", {
            method: "POST",
            body: formData,
            headers: {}, // ✅ FormData auto sets headers
        });
    }

    async login(credentials: { email: string; password: string }) {
        return this.request("/users/login", {
            method: "POST",
            body: JSON.stringify(credentials),
        });
    }

    async logout() {
        return this.request("/users/logout", {
            method: "POST",
        });
    }

    async getCurrentUser() {
        return this.request("/users/me", {
            method: "GET",
        });
    }

    async refreshToken() {
        return this.request("/users/refresh-token", {
            method: "POST",
        });
    }
}

export const apiService = new ApiService();