<script lang="ts">
    import Snackbar from '$lib/components/Snackbar.svelte';
    import Navbar from '$lib/components/Navbar.svelte';
    import Check from '$lib/components/Icon/Check.svelte';
    import Button from '$lib/components/Button.svelte';
    import { provinces } from '$lib/utils/provinces';
    import { settings, loadSettings } from '$lib/stores/SettingsStore';
    import { onMount } from 'svelte';
  
    let mySettings: Settings = {} as Settings;
  
    onMount(() => {
      loadSettings();
      mySettings = { ...$settings };
    });
  </script>
  
  <div class="grid min-h-screen grid-cols-12 bg-whisper md:gap-x-16">
    <Snackbar />
    <Navbar />
    <main
      class="col-span-12 px-4 pt-4 md:col-span-8 md:col-start-4 md:pt-20 lg:col-span-6 lg:col-start-5"
    >
      <h2>Invoice Details</h2>
      <p class="mb-8">This information gets included on each invoice.</p>
  
      <form class="grid grid-cols-6 gap-x-5">
        <div class="field col-span-6">
          <label for="myName">Name</label>
          <input type="text" name="myName" id="myName" bind:value={mySettings.myName} />
        </div>
        <div class="field col-span-6">
          <label for="address">Address</label>
          <input type="text" name="address" id="address" bind:value={mySettings.address} />
        </div>
        <div class="field col-span-6 md:col-span-2">
          <label for="city">City</label>
          <input type="text" name="city" id="city" bind:value={mySettings.city} />
        </div>
        <div class="field col-span-6 md:col-span-2">
          <label for="province">Province</label>
          <select name="state" id="state" bind:value={mySettings.province}>
            <option />
            {#each provinces as province}
              <option value={province.value}>{province.name}</option>
            {/each}
          </select>
        </div>
        <div class="field col-span-6 md:col-span-2">
          <label for="zip">Postal</label>
          <input type="text" name="postal" id="postal" bind:value={mySettings.postal} />
        </div>
        <div class="field col-span-6 flex justify-end">
          <Button label="Save" iconLeft={Check} onClick={() => {}} />
        </div>
      </form>
  
      <div class="col-span-6">
        <h2>Update Account Information</h2>
        <p class="mb-8">This information is used to access your account.</p>
      </div>
      <form class="grid grid-cols-6 gap-x-5">
        <div class="field col-span-6 md:col-span-3">
          <label for="email">Email Address</label>
          <input type="email" name="email" />
        </div>
  
        <div class="field col-span-6 md:col-span-3">
          <label for="currentPassword">Current Password</label>
          <input type="password" name="currentPassword" id="currentPassword" />
        </div>
  
        <div class="field col-span-6 md:col-span-3">
          <label for="newPassword">New Password</label>
          <input type="password" name="newPassword" id="newPassword" />
        </div>
  
        <div class="field col-span-6 md:col-span-3">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
  
        <div class="field col-span-6 flex justify-end">
          <Button label="Save" iconLeft={Check} onClick={() => {}} />
        </div>
      </form>
    </main>
  </div>
  
  <style lang="postcss">
    h2 {
      @apply mb-1 text-3xl font-black text-daisyBush;
    }
  </style>
  