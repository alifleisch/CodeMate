// // http://localhost:5173/profile
// interface UserProfileService {
//     getProfile(userId: string): Promise<UserProfile>;
//     updateProfile(payload: UserProfileUpdateBody): Promise<UserProfile>;
// }

// class UserProfileHttpService implements UserProfileService { }
// class UserProfileMockService implements UserProfileService { }

// // http://localhost:5173/home
// interface UserService {
//     getUsers(page: number, limit: number): Promise<User[]>;
//     getProfile(userId: string): Promise<UserProfileView>;
// }

// interface User {
// }
// interface UserProfileView {
//     name: string;
// }


// interface UserProfile {
//     name: string;
// }

// function mapToUserProfileView(UserProfile: UserProfile): UserProfileView {
// }

// interface UserProfileUpdateBody {
// }


// const userProfile = () => {
//     const profileService: UserProfileService = new UserProfileHttpService();
// }