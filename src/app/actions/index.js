'use server'

export async function doSocialLogin(formData) {
    const action = formData.get('action');
    console.log("action called: ",action)
}

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}