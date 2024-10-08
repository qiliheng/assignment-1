import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core'; 
import { isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  userid = 0;
  username = '';
  userbirthdate = '';
  userage = 0;

  constructor(
    private httpClient: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.username = sessionStorage.getItem('username') || '';
      this.userbirthdate = sessionStorage.getItem('userbirthdate') || '';
      this.userage = Number(sessionStorage.getItem('userage') || 0);
      this.userid = Number(sessionStorage.getItem('userid') || 0);
    }
  }

  deleteAccount() {
    const username = sessionStorage.getItem('username');

    if (username) {
      const deleteUser = { username: username };

      this.httpClient.post('http://s5294121.elf.ict.griffith.edu.au:8888/deleteUser', deleteUser)
        .subscribe(
          (response: any) => {
            console.log('User deleted successfully:', response);
            alert('Your account has been deleted.');
            sessionStorage.clear();
            window.location.href = '/login';
          },
          (error: any) => {
            console.error('Error deleting user:', error);
            alert('There was a problem deleting your account.');
          }
        );
    } else {
      console.error('No user is logged in.');
      alert('No user is logged in.');
    }
  }
}

